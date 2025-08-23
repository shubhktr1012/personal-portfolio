'use client'
import React, { useState } from "react";

export default function Resume() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <h1 className="text-foreground text-2xl font-bold">Resume</h1>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)} className="rounded-2xl bg-white p-2">Click Me</button>
        </div>
    )
}