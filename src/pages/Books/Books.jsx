import React, { useContext } from "react";
import { BookContext } from "../../context/BookProvider";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadBookCard from "../../ui/ReadBookCard";

const Books = () => {
  const { storedBook, wishList } = useContext(BookContext);

  return (
    <div className="min-h-screen bg-[#0A071E] py-12 lg:py-24">
      <div className="container mx-auto px-6 lg:px-0">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 font-serif">
            My Book <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Collections</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Keep track of the masterpieces you've conquered and the stories that are next on your journey.
          </p>
        </div>

        <Tabs className="custom-tabs">
          <TabList className="flex gap-8 border-b border-white/10 mb-10 list-none p-0 overflow-x-auto scrollbar-hide">
            <Tab className="pb-4 text-xl font-bold text-white/40 cursor-pointer outline-none transition-all relative aria-selected:text-white aria-selected:after:absolute aria-selected:after:bottom-[-1px] aria-selected:after:left-0 aria-selected:after:w-full aria-selected:after:h-1 aria-selected:after:bg-gradient-to-r aria-selected:after:from-purple-500 aria-selected:after:to-blue-500 hover:text-white/80">
              Read List
              <span className="ml-3 px-2.5 py-1 rounded-full bg-white/5 text-sm font-bold border border-white/10 group-aria-selected:bg-purple-500/20">
                {storedBook.length}
              </span>
            </Tab>
            <Tab className="pb-4 text-xl font-bold text-white/40 cursor-pointer outline-none transition-all relative aria-selected:text-white aria-selected:after:absolute aria-selected:after:bottom-[-1px] aria-selected:after:left-0 aria-selected:after:w-full aria-selected:after:h-1 aria-selected:after:bg-gradient-to-r aria-selected:after:from-purple-500 aria-selected:after:to-blue-500 hover:text-white/80">
              Wishlist
              <span className="ml-3 px-2.5 py-1 rounded-full bg-white/5 text-sm font-bold border border-white/10 group-aria-selected:bg-blue-500/20">
                {wishList.length}
              </span>
            </Tab>
          </TabList>

          <TabPanel className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {storedBook.length > 0 ? (
              storedBook.map((book) => (
                <ReadBookCard key={book.bookId} book={book} />
              ))
            ) : (
              <div className="bg-white/5 border border-dashed border-white/20 rounded-3xl p-20 text-center">
                <p className="text-white/40 text-2xl font-serif italic mb-6">Your read list is empty. Start your journey today!</p>
                <button className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-purple-500/20">
                  Explore Books
                </button>
              </div>
            )}
          </TabPanel>

          <TabPanel className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {wishList.length > 0 ? (
              wishList.map((book) => (
                <ReadBookCard key={book.bookId} book={book} />
              ))
            ) : (
              <div className="bg-white/5 border border-dashed border-white/20 rounded-3xl p-20 text-center">
                <p className="text-white/40 text-2xl font-serif italic mb-6">Your wishlist is currently empty. Find your next obsession!</p>
                <button className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-purple-500/20">
                  Add Some Books
                </button>
              </div>
            )}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Books;
