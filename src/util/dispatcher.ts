import {uniqueId, asyncAll} from './util';
import Actor from './actor';

import type WorkerPool from './worker_pool';

/**
 * Responsible for sending messages from a {@link Source} to an associated
 * {@link WorkerSource}.
 *
 * @private
 */
class Dispatcher {
    workerPool: WorkerPool;
    actors: Array<Actor>;
    currentActor: number;
    id: number;

    // exposed to allow stubbing in unit tests
    static Actor: {
        new (...args: any): Actor;
    };

    constructor(workerPool: WorkerPool, parent: any) {
        this.workerPool = workerPool;
        this.actors = [];
        this.currentActor = 0;
        this.id = uniqueId();
        const workers = this.workerPool.acquire(this.id);
        for (let i = 0; i < workers.length; i++) {
            const worker = workers[i];
            const actor = new Dispatcher.Actor(worker, parent, this.id);
            actor.name = `Worker ${i}`;
            this.actors.push(actor);
        }
        if (!this.actors.length) throw new Error('No actors found');
    }

    /**
     * Broadcast a message to all Workers.
     * @private
     */
    broadcast(type: string, data: unknown, cb?: (...args: any[]) => any) {
        cb = cb || function () {};
        asyncAll(this.actors, (actor, done) => {
            actor.send(type, data, done);
        }, cb);
    }

    /**
     * Acquires an actor to dispatch messages to. The actors are distributed in round-robin fashion.
     * @returns An actor object backed by a web worker for processing messages.
     */
    getActor(): Actor {
        this.currentActor = (this.currentActor + 1) % this.actors.length;
        return this.actors[this.currentActor];
    }

    remove() {
        this.actors.forEach((actor) => { actor.remove(); });
        this.actors = [];
        this.workerPool.release(this.id);
    }
}

Dispatcher.Actor = Actor;

export default Dispatcher;
