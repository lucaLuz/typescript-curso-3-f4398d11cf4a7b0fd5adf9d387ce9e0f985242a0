export function domInjector(seletor: string) {
    return function (
        target: any,
        propertyKey: string
    ) {
        console.log(`Modificando prototype ${target.constructor.name}
        adicionando getter para a propriedade ${propertyKey}`)
        
        let elemento: HTMLElement;

        const getter = function () {
            if (!elemento) {
                elemento = <HTMLElement>document.querySelector(seletor);
                console.log(`buscando elemento do dom com o seletor${seletor} 
                para injetar em ${propertyKey}`)
            }
            return elemento;
        }
        Object.defineProperty(
            target,
            propertyKey,
            { get: getter }
        );
    }
}