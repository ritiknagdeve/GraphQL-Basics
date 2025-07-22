export const resolvers = {
    Book: {
        author: (book) => {
            return { id: book.authorId, name: `Author ${book.authorId}` };
        },
    },
    Author: {
        books: (author) => {
            return [
                { id: "1", title: "Book One", publishedYear: 2020, authorId: author.id },
            ];
        },
    },
    Query: {
        authors: () => {
            return [
                { id: "1", name: "Author One", bookIds: ["1"] },
                { id: "2", name: "Author Two", bookIds: ["2"] },
            ];
        },
        books: () => {
            return [
                { id: "1", title: "Book One", publishedYear: 2020, authorId: "1" },
                { id: "2", title: "Book Two", publishedYear: 2021, authorId: "2" },
            ];
        },
    },
}