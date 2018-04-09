export interface DaoInterface<T>{
    
    nomeTabela: string 

    inserir(object: T): boolean
    atualiazar(object: T): boolean
    remover(id: number): T
    selecionar(id: number): T
    selecionarTodos(): Array<T>
}