interface TypeDatory {
    /** Exclusive Datory class object.
    @class */

    new(value: string): typeof InitDatory
    
    /** Find and delete completely a given element.
    @method */

    findAndDelete(value: string): void

    /** Replace all elements once.
    @method */

    replaceAll(value: object[]): void

    /** Find the value of a given element.
    @method */

    findInto(value: string): any

    /** Set a new value to an new/existing element.
    @method */

    putInto(value: object): void

    /** List all elements once.
    @method */

    listAll(): object[]
}

declare const InitDatory: TypeDatory
export default InitDatory