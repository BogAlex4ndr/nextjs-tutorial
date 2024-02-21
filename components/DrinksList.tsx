import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const DrinksList = ({ drinks }: any) => {
    return (
        <ul className='grid sm:grid-cols-3 gap-6 mt-6'>{drinks.map((drink: any) => (
            <li key={drink.idDrink}>
                <Link href={`/drinks/${drink.idDrink}`}>
                    <div className='relative h-48 mb-4'>
                        <Image
                            src={drink.strDrinkThumb}
                            fill
                            className='rounded-md object-cover'
                            sizes='(max-width:768px) 100vh, (max-width:1200px) 50vh'
                            alt="drink" />
                    </div>
                    <h1 className='text-2xl'> {drink.strDrink}</h1>
                </Link>
            </li>
        ))}</ul>
    )
}

export default DrinksList