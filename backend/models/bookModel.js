import mongoose from 'mongoose';

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: [true, 'Genre is required'], 
      trim: true,
    },
    pages: {
      type: Number,
      required: [true, 'Number of pages is required'],
      min: [1, 'A book must have at least one page'], 
    },
    publishedDate: {
      type: Date,
      required: [true, 'Published Date is required'],
    },
  },
  
  {
    timestamps: true,
  }
);

export const Book = mongoose.model('Book', bookSchema);