import axios from "axios";
import { useState, useEffect } from "react";
import Spinner from './Spinner';
import useGif from "../hooks/useGif";

function Random() {
    const { gif, loading, fetchData } = useGif();

    return (
        <div className="bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] py-[20px]">
            <h1 className="text-2xl underline uppercase font-bold">Random GIF</h1>

            {/* For The Loader And The Image */}
            {
                loading ? (<Spinner />) : (<img src={gif} className="w-[450px]" />)
            }


            <button onClick={() => fetchData()}
                className="w-10/12 bg-blue-50 text-lg py-2 rounded-lg">
                Generate
            </button>
        </div>
    )
}
export default Random;