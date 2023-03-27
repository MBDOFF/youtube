import Head from "next/head";
import axios from "axios";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { useEffect, useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      axios
        .get("/api/search/" + search)
        .catch(() => {
          setSearchResults([]);
          setUrl("");
        })
        .then((res) => {
          if (res){
            setSearchResults(res.data);
            setUrl(res.data[0].url);
          }
        });
    }, 500);
    return () => clearTimeout(timeOutId);
  }, [search]);

  function setUrl(link:string){
    setSelected(link.replace("watch?v=", "embed/"));
  }

  return (
    <>
      <Head>
        <title>Youtube</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex items-center justify-center h-screen bg-red-100">
          <div className="bg-white rounded-2xl border shadow-x1 p-10 max-w-lg  w-5/6">
            <div className="flex flex-col items-center space-y-4">
              <h1 className="font-bold text-2xl text-gray-700 text-center">
                📺 Ce videoclip vrei sa vezi?
              </h1>
              <p className="text-sm text-gray-500 text-center w-5/6">
                Introdu in bara de mai jos ce vrei sa cauti.
              </p>
              <Input
                className="border-2 rounded-lg w-full h-12 px-4"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {searchResults.length > 0 && (
                <Input
                  name="select"
                  type="select"
                  className="border-2 rounded-lg w-full h-12 px-4"
                  value={selected}
                  onChange={(e) => setUrl(e.target.value)}
                >
                  {searchResults.map((result: any, index) => (
                    <option key={index} value={result.url}>
                      {result.title}
                    </option>
                  ))}
                </Input>
              )}
              {selected != "" && (
                <iframe className="px-4 py-3 w-full" src={selected}></iframe>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
