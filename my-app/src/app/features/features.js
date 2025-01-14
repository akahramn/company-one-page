'use client'

import {useEffect} from "react";
import "bootstrap-icons/font/bootstrap-icons.css"

export default function Features (props) {
    useEffect(() => {
        console.log("Features", props);
    })
    return (
        <div id="features" className="text-center">
            <div className="container">
                <div className="col-md-10 col-md-offset-1 section-title">
                    <h2>Features</h2>
                </div>
                <div className="row">
                    {props.data
                        ? props.data.map((d, i) => (
                            <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                                {" "}
                                <i className={d.icon}></i>
                                <i className="bi bi-1-circle"></i>
                                <h3>{d.title}</h3>
                                <p>{d.text}</p>
                            </div>
                        ))
                        : "Loading..."}
                </div>
            </div>
        </div>
    )
}