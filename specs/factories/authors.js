module.exports = (factory, Models) => {
  factory.define('Author', Models.Author, {
    name: 'J.R.R Tolkien',        
    createdAt: new Date(),
    updatedAt: new Date()
  })
}