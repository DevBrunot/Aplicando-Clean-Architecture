export interface IRepository<T>{
    create: (item:T) => Promise<T>;
    update:(filter: Partial<T>,  item: Partial<T>) => T;
    get: (filter: Partial<T>) => Array<T>;
    getAll: ()=> Array<T>;
    delete: (filter: Partial<T>) =>boolean;
}
