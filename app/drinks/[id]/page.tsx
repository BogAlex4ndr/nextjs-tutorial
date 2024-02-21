import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import imageTiger from '@/.next/static/tiger.jpg'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const getSingleDrink = async (id: any) => {
    const res = await fetch(`${url}${id}`)
    if (!res.ok) {
        throw new Error("fail to fetch a drink")
    }
    return res.json()
}

const SigleDrinkPage = async ({ params }: any) => {

    const data = await getSingleDrink(params.id)


    const { strDrink, strTags, strDrinkThumb, strCategory, strImageSource } = data?.drinks[0];

    console.log(data)
    return (
        <div className='text-black'>
            <Link href={"/drinks"} className='btn btn-secondary mb-8 mt-8'>
                back to list
            </Link>
            <div className=' bg-orange-100 max-w-sm'>
                <h1 className=' text-2xl text-primary'>{strDrink}</h1>
                <h2 className='text-2px'>{strCategory ? strCategory : "no category"}</h2>

                <Image className='w-full h-full' width={600} height={600} priority src={strDrinkThumb} alt='image' />
            </div>
        </div>
    )
}

export default SigleDrinkPage