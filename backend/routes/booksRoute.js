import express from 'express';
import { Book } from '../models/bookModel.js';

const router = express.Router();


router.post('/', async (request, response) => {
  try {
    const { title, author, genre, pages, publishedDate, publishYear } = request.body;

    
    if (!title || !author || !publishYear || !genre || !pages || !publishedDate) {
      return response.status(400).send({
        message: 'Send all required fields: title, author, genre, pages, publishedDate, publishYear',
      });
    }

   
    const newBook = {
      title,
      author,
      genre,
      pages,
      publishedDate,
      publishYear,
    };

    
    const book = await Book.create(newBook);

    return response.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});


router.get('/', async (request, response) => {
  try {
    const books = await Book.find({});
    return response.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});


router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const book = await Book.findById(id);

    if (!book) {
      return response.status(404).json({ message: 'Book not found' });
    }

    return response.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});


router.put('/:id', async (request, response) => {
  try {
    const { title, author, genre, pages, publishedDate, publishYear } = request.body;

    
    if (!title || !author || !publishYear || !genre || !pages || !publishedDate) {
      return response.status(400).send({
        message: 'Send all required fields: title, author, genre, pages, publishedDate, publishYear',
      });
    }

    const { id } = request.params;

    
    const result = await Book.findByIdAndUpdate(id, { title, author, genre, pages, publishedDate, publishYear }, { new: true });

    if (!result) {
      return response.status(404).json({ message: 'Book not found' });
    }

    return response.status(200).send({ message: 'Book updated successfully', data: result });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});


router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Book.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: 'Book not found' });
    }

    return response.status(200).send({ message: 'Book deleted successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
