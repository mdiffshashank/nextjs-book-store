import React from "react";
import Card from "../_ui/components/Card";

type BookType = {
  id: number;
  title: string;
  author: string;
  publication_year: number;
  genre: Array<string>;
  description: string;
  cover_image: string;
};

type Catelogue = BookType[];

export async function getData() {
  try {
    const response = await fetch("https://freetestapi.com/api/v1/books", {
      next: { revalidate: 200 },
    });
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    return await response.json();
  } catch (err) {
    console.log(err);
  }
}

const Cateloguepage = async () => {
  const catelog = await getData();
  catelog.length = 16;

  return (
    <div className="w-100 h-screen p-4 flex flex-wrap justify-center">
      {catelog.map((book: BookType) => {
        return (
          <Card key={book.id} title={book.title}>
            <div className="flex mt-2">
              <i>{book.description}</i>
            </div>
            <div>
              {book?.genre.map((g) => (
                <span
                  key={g}
                  title={g}
                  className="inline-block bg-violet-200 m-2 mt-4 p-2 rounded max-w-32 text-ellipsis overflow-hidden text-nowrap"
                >
                  {g}
                </span>
              ))}
            </div>
            <div className="flex mt-2 w-full justify-end">
              <i> -{book.author}</i>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default Cateloguepage;
