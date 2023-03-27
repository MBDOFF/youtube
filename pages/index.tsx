import Head from "next/head";
import axios from "axios";
import { Form, Input } from "reactstrap";
import { useEffect, useState } from "react";

export default function Home() {

  return (
    <>
      <Head>
        <title>Youtube</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Form>
          <div className="flex h-screen items-center justify-center bg-[#fbfbfb]">
            <div className="grid w-80 grid-rows-4 gap-1">
              <p className="font-semibold text-gray-700 text-center">
                📺 Ce videoclip vrei sa vezi?
              </p>
              <Input
                className="h-10 w-full rounded border p-2 text-sm"
                name="select"
                type="text"
              />
            </div>
          </div>
        </Form>
      </main>
    </>
  );
}
