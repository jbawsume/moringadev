'use client'
import React, { useState, useEffect, useRef } from "react";

import { gsap, TweenMax, TimelineMax } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { useGSAP } from "@gsap/react";

import Image from "next/image";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  const container = useRef(null);

  useGSAP(() => {


    gsap.to("#service1", 1, {
      width: "90vw", borderRadius: "20px", scrollTrigger: {
        trigger: "#service1",
        start: "top bottom-=100px",
        end: "bottom center",
        invalidateOnRefresh: true,
        scrub: 1,
        //markers: true,
      }
    })
    gsap.to("#service2", 1, {
      width: "90vw", borderRadius: "20px", scrollTrigger: {
        trigger: "#service2",
        start: "top bottom-=100px",
        end: "bottom center",
        invalidateOnRefresh: true,
        scrub: 1,
        //markers: true,
      }
    })
    gsap.to("#service3", 1, {
      width: "90vw", borderRadius: "20px", scrollTrigger: {
        trigger: "#service3",
        start: "top bottom-=100px",
        end: "bottom center",
        invalidateOnRefresh: true,
        scrub: 1,
        //markers: true,
      }
    })


  }, { scope: container });
  return (
    <main ref={container} className="relative">
      <div className="fixed top-0 left-0 right-0 w-full container z-10 flex justify-between mx-auto rounded-3xl overflow-hidden">

        <div className="pt-4"> <img className="w-16 h-16 " src="/images/moringalogo.webp" /></div>
        <div className="pt-8 hidden md:block">
          <ul className="list-none flex flex-row">
            <li><a className="uppercase font-bold text-white p-4 text-sm no-underline">About us</a></li>
            <li><a className="uppercase font-bold text-white p-4 text-sm no-underline">Services</a></li>
            <li><a className="uppercase font-bold text-white p-4 text-sm no-underline">Partner With Us</a></li>
            <li><a className="uppercase font-bold text-white p-4 text-sm no-underline">About us</a></li>
          </ul>
        </div>
      </div>
      <div className=" hero_bg_img">
        <div className="container mx-auto">
          <div className="flex  justify-center md:justify-end">
            <div className="w-2/3 pt-52">
              <h1 className="text-3xl px-5 lg:px-0 lg:text-4xl text-white font-bold uppercase">MORINGA DEVELOPEMENT CORPORATION</h1>
              <p className="pt-10 lg:text-2xl text-white ">Farming Your Lifestyle into a Business</p>
            </div>
          </div>
        </div>

      </div>
      <div className="m-0 mb-20">

        <div className="container mx-auto m-lift">
          <div className="w-full rounded-3xl bg-green-700 flex flex-wrap">
            <div className="w-full md:w-1/2  px-10 md:pl-16 py-10 md:py-20  text-white">
              <div className="pt-1 pb-12 text-3xl font-bold">Our Vision</div>
              <p className="text-lg">As a leader in the industry, moringa development corporation is currently promoting economic change among the rural small scale farmers to eradicate poverty especially among women and children. It intends to invest in the moringa value chain that will ultimately have a positive impact in the lives of the small scale farmers that will be engaged in the out grower scheme </p>
              <p className="pt-10 text-lg">We aim to facilitate the commercialization of Moringa in the SADC region and improve the economic status of small scale farmers</p>
            </div>
            <div className="w-full md:w-1/2 h-full  relative">
              <div className="w-full h-full rounded-3xl overflow-hidden streamline_img ">
                <img id="image1" alt="Speaker Image" className="w-full h-full object-cover" src="/images/farmer1.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="service1" className="h-64 my-28 relative bg-container bg-1 mx-auto ease-linear">
        <div className="text-5xl text-white absolute bottom-0">
          <p className="pb-10 pl-20">Services</p>
        </div>
      </div>
      <div className="m-0 my-20">

        <div className="container mx-auto ">
          <div className="w-full rounded-3xl bg-green-700 grid md:grid-cols-5 gap-4 project_h px-8 ">
            <div className=" py-10 text-white">
              <div className="">
                <div className="pt-1 pb-3  font-bold">Empower Smallholder Farmers </div>
                <p className="text-sm"> Strengthen the capacities and efficiencies of an increased number of small scale famers</p>
                <p className="text-sm">Sustain Moringa production among the small scale famers through an increased number of hector age cultivated</p>
              </div>
            </div>
            <div className=" py-10 text-white">
              <div className="md:h-3/6 flex content-end flex-col justify-end">
                <div className="pt-1 pb-3  font-bold">Elevate Farming Outcomes</div>
                <p className="text-sm">Contribute and enhance Moringa farming practices for increased farm yeilds</p>
                <p className="text-sm">Improve farm management through technical assistance provided by the corporation</p>
              </div>

            </div>
            <div className=" py-10 text-white">
              <div className="md:h-3/4 flex content-end flex-col justify-end">

                <div className="pt-1 pb-3  font-bold">Fortify Moringa Scheme Management</div>
                <p className="text-sm">Strengthen the capacities MDC - Moringa out-grower scheme project to manage the project</p>
                <p className="text-sm">Enhanced managerial and technical capacities of staff with respect to the moringa out-grower project</p>
              </div>
            </div>
            <div className=" py-10 text-white">
              <div className="md:h-5/6 flex content-end flex-col justify-end">

                <div className="pt-1 pb-3  font-bold">Unlock Moringa Markets</div>
                <p className="text-sm">Contribute to enhanced Moringa market accessibility (Moringa Processing plant)</p>
                <p className="text-sm">Improved market access and market development through the establishment of the processing plant</p>
              </div>
            </div>
            <div className=" py-10 text-white">
              <div className="flex md:h-full content-end flex-col justify-end">
                <div className="pt-1 pb-3  font-bold">Enable Affordable Farm Inputs</div>
                <p className="text-sm">Access to low cost inputs such as certified seeds</p>
                <p className="text-sm">Contribute to the provision of low cost credit for Moringa farming inputs for out-growers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="service2" className="h-64 my-28 relative bg-container bg-1 mx-auto ease-linear">
        <div className="text-5xl text-white absolute bottom-0">
          <p className="pb-10 pl-20">About</p>
        </div>
      </div>
      <div className="m-0 mb-20">

        <div className="container mx-auto ">
          <div className="w-full rounded-3xl bg-green-700 flex flex-wrap">
            <div className="w-full md:w-1/2  px-10 md:pl-16 py-10 md:py-20 text-white">
              <div className="pt-1 pb-12 text-3xl font-bold">ABOUT MORINGA DEVELOPMENT CORPORATION</div>
              <p className="text-base">Moringa Development Corporation (MDC) is a private inititiative set-up in Zambia to promote investment in the entire Moringa Value Chain and in the process, help increase the income levels and improve the nutritional status of the general populace in the SADC region.
MDCs key activities shall through its various activities Advance improved crop Management, Access to both localand international markets, Promote Value addition through Networking and Collaboration with stakeholders across the Moringa Value Chain</p>
            </div>
            <div className="w-full md:w-1/2 h-full  relative">
              <div className="w-full h-full rounded-3xl overflow-hidden streamline_img ">
                <img id="image1" alt="Speaker Image" className="w-full h-full object-cover" src="/images/farmer2.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="service3" className="h-64 my-28 relative bg-container bg-1 mx-auto ease-linear">
        <div className="text-5xl text-white absolute bottom-0">
          <p className="pb-10 pl-20">Contact us</p>
        </div>
      </div>
      <div className="m-0 mb-20">

        <div className="container mx-auto ">
          <div className="w-full rounded-3xl bg-green-700 flex flex-wrap">
            <div className="w-full md:w-1/2 px-10 md:pl-16 py-10 md:py-20 ">
              <div className="">
                <input type="text" className="form-input px-4 py-3 w-full rounded-xl" placeholder="Name:" />
              </div>
              <div className="pt-5">
                <input type="email" className="form-input px-4 py-3 w-full rounded-xl" placeholder="Email:" />
              </div>
              <div className="pt-5">
                <input type="text" className="form-input px-4 py-3 w-full rounded-xl" placeholder="Subject:" />
              </div>
              <div className="pt-5">
                <textarea
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  rows={5}
                ></textarea>
              </div>
              <div className="pt-5">
                <button className="px-10 py-3 bg-white rounded-xl"> Submit</button>
              </div>
            </div>
            <div className="w-full md:w-1/2 h-full relative">
              <div className="w-full h-full rounded-3xl overflow-hidden streamline_img2 ">
                <img id="image1" alt="Speaker Image" className="w-full h-full object-cover" src="/images/farmer3.webp" />
              </div>
              <div className="w-full grid grid-cols-2 gap-1 text-white pt-20 px-8">
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p>+260 977 848320<br />+260 977 788975</p>
                </div>
                <div >
                  <h3 className="font-bold">Email</h3>
                  <p>gilbert@mocat.zm<br />msinyinza@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-green-700">
        <hr />
        <div className="text-xs py-5 text-center text-white">Copyright@2024 | All Rights Reserved</div>
      </div>
    </main>
  );
}
