import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface BookItem {
  title: string;
  description: string;
  authors: string[];
  rating: number;
  ratings: number[];
  hasRated: boolean;
  image:string;
}

@Component({
  selector: 'app-book-rating',
  templateUrl: './book-rating.component.html',
  styleUrls: ['./book-rating.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class BookRatingComponent {
  books: BookItem[] = [
    {
      title: 'And Then There Were None',
      description:
        "First, there were ten—a curious assortment of strangers summoned as weekend guests to a little private island off the coast of Devon. Their host, an eccentric millionaire unknown to all of them, is nowhere to be found. All that the guests have in common is a wicked past they're unwilling to reveal—and a secret that will seal their fate. For each has been marked for murder. A famous nursery rhyme is framed and hung in every room of the mansion",
      authors: ['Agatha Christie'],
      rating: 0,
      ratings: [],
      hasRated: false,
      image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1638425885i/16299.jpg"
    },
    {
      title: 'The Girl with the Dragon Tattoo',
      description:
        "Harriet Vanger, a scion of one of Sweden’s wealthiest families disappeared over forty years ago. All these years later, her aged uncle continues to seek the truth. He hires Mikael Blomkvist, a crusading journalist recently trapped by a libel conviction, to investigate. He is aided by the pierced and tattooed punk prodigy Lisbeth Salander. Together they tap into a vein of unfathomable iniquity and astonishing corruption.",
      authors: ['Stieg Larsson'],
      rating: 0,
      ratings: [],
      hasRated: false,
      image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1684638853i/2429135.jpg"
    },
    {
      title: 'Angels & Demons',
      description:
      "When a world, renowned scientist is found brutally murdered in a Swiss research facility, a Harvard professor, Robert Langdon, is summoned to identify the mysterious symbol seared onto the dead man's chest. His baffling conclusion: it is the work of the Illuminati, a secret brotherhood presumed extinct for nearly four hundred years - reborn to continue their bitter vendetta against their sworn enemy, the Catholic church.",
      authors: ['Dan Brown'],
      rating: 0,
      ratings: [],
      hasRated: false,
      image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1696691404i/960.jpg"
    },
    {
      title: 'Gone Girl',
      description:
      "Who are you? What have we done to each other? These are the questions Nick Dunne finds himself asking on the morning of his fifth wedding anniversary when his wife Amy suddenly disappears. The police suspect Nick. Amy's friends reveal that she was afraid of him, that she kept secrets from him. He swears it isn't true. A police examination of his computer shows strange searches. He says they weren't made by him. And then there are the persistent calls on his mobile phone.",
      authors: ['Gillian Flynn'],
      rating: 0,
      ratings: [],
      hasRated: false,
      image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1554086139i/19288043.jpg"
    },
    {
      title: 'Shutter Island',
      description:
      "The year is 1954. U.S. Marshal Teddy Daniels and his new partner, Chuck Aule, have come to Shutter Island, home of Ashecliffe Hospital for the Criminally Insane, to investigate the disappearance of a patient. Multiple murderess Rachel Solando is loose somewhere on this remote and barren island, despite having been kept in a locked cell under constant surveillance. As a killer hurricane relentlessly bears down on them, a strange case takes on even darker, more sinister shades—with hints of radical experimentation, horrifying surgeries, and lethal countermoves made in the cause of a covert shadow war. No one is going to escape Shutter Island unscathed, because nothing at Ashecliffe Hospital is what it seems. But then neither is Teddy Daniels.",
      authors: ['Dennis Lehane'],
      rating: 0,
      ratings: [],
      hasRated: false,
      image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1329269081i/21686.jpg"
    },
    {
      title: 'Rebecca',
      description:
        "Ancient, beautiful Manderley, between the rose garden and the sea, is the county's showpiece. Rebecca made it so - even a year after her death, Rebecca's influence still rules there. How can Maxim de Winter's shy new bride ever fill her place or escape her vital shadow? A shadow that grows longer and darker as the brief summer fades, until, in a moment of climatic revelations, it threatens to eclipse Manderley and its inhabitants completely...",
      authors: ['Daphne du Maurier'],
      rating: 0,
      ratings: [],
      hasRated: false,
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1386605169i/17899948.jpg"
    },
  ];
  currentBookIndex = 0;

  get currentBook(): BookItem {
    return this.books[this.currentBookIndex];
  }

  restart() {
    this.currentBookIndex = 0;
    this.books.forEach((book) => (book.hasRated = false));
  }

  finish() {
      alert('Благодарим ви!');
  }

  get allBooksRated(): boolean {
    return this.books.every((book) => book.hasRated);
  }

  rateBook(rating: number) {
    if (this.books.length === 0) {
      console.error('No books available.');
      return;
    }
    this.currentBook.ratings.push(rating);
    this.currentBook.rating =
      this.currentBook.ratings.reduce((a, b) => a + b) /
      this.currentBook.ratings.length;
    this.currentBook.hasRated = true;
    this.currentBookIndex = (this.currentBookIndex + 1) % this.books.length;
  }

  updateBook(title: string, description: string, authors: string[]) {
    this.currentBook.title = title;
    this.currentBook.description = description;
    this.currentBook.authors = authors;
  }
}
