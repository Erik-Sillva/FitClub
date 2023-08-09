import React from 'react'
import Flame from '../components/Card/CardPrograms/CardPrograms';

interface Program {
    heading: string;
    details: string;
    id: number;
}

export const programsData: Program[] = [
    {
        heading: "Strength Training",
        details: "In this program, you are trained to improve your strength through many exercises.",
        id: 1,
    },

    {
        heading: "Cardio Training",
        details: "In this program, you are trained to do sequential moves in range of 20 until 30 minutes.",
        id: 2,
    },

    {
        heading: "Fat Burning",
        details: "This program is suitable for you who wants to get rid of your fat and lose their weight.",
        id: 3,
    },

    {
        heading: "Health Fitness",
        details: "This programs is designed for those who exercises only for their body fitness not body building.",
        id: 4,
    },
]