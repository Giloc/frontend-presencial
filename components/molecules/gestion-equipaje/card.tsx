'use client';
import React, { useState } from "react"
import LuggageForm from "./form"
import luggageLogo from 'public/luggage.svg';
import Image from "next/image";


export const BaggageCard = ({
  title,
  description,
  information,
}: {
  title: string
  description: string
  information: string
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border border-cyan-500 px-6 py-10 text-center">
      <h2 className="text-2xl font-semibold mb-4 text-center">{title}</h2>
      <div className="text-center mb-4">
        <Image src={luggageLogo} alt="Luggage" className="mx-auto h-32 w-32 mb-2"></Image>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="text-center">
        <button
          onClick={handleOpen}
          type="button"
          className="text-cyan-500 border-2 border-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-100">
          Agregar Equipaje
        </button>
      </div>
      <LuggageForm open={open} handleClose={handleClose}></LuggageForm>
    </div>
  )
}

export const InfoCard = ({ title }: { title: string }) => {
  return (
    <div className="m-4 block p-6">
      <h2 className="mb-7 text-center text-lg font-light">{title}</h2>
      <div className="space-y-5">
        <p>Lorem ipsum dolor sit amet consectetur</p>
        <p>Lorem ipsum dolor sit amet consectetur</p>
        <p>Lorem ipsum dolor sit amet consectetur</p>
        <p>Lorem ipsum dolor sit amet consectetur</p>
        <p>Lorem ipsum dolor sit amet consectetur</p>
        <p>Lorem ipsum dolor sit amet consectetur</p>
      </div>
    </div>
  )
}

export const RecommendationCard = ({ title }: { title: string }) => {
  return (
    <div className="rounded-2xl border border-cyan-500 bg-white p-3">
      <h3 className="mb-1 font-semibold text-blue-900">{title}</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
    </div>
  )
}
