export default (context, inject) => {
    //inject('name', 'Dick')
    inject('name', (name) => `Olá ${name}`)
}