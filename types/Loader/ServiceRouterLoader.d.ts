declare namespace Jymfony.Component.Routing.Loader {
    import Loader = Jymfony.Component.Config.Loader.Loader;
    import RouteCollection = Jymfony.Component.Routing.RouteCollection;
    import ContainerInterface = Jymfony.Component.DependencyInjection.ContainerInterface;

    export class ServiceRouterLoader extends Loader {
        private _container: ContainerInterface;

        /**
         * Constructor.
         */
        // @ts-ignore
        __construct(container: ContainerInterface): void;
        constructor(container: ContainerInterface);

        /**
         * @inheritdoc
         */
        load(resource: any): RouteCollection;

        /**
         * @inheritdoc
         */
        supports(resource: any, type: 'service'): true;
        supports(resource: any, type?: string): boolean;

        /**
         * Adds resources for class to the collection.
         */
        private _addClassResource(reflClass: ReflectionClass, collection: RouteCollection): void;
    }
}
