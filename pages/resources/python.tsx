import Head from 'next/head'
import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import ResourceCard from '../components/cards/ResourceCard'
import resources from '../../database/dummyDB/dummyResources'
import { NextPage } from 'next'
import FilterResource from '../components/Resources/FilterResources'

const Resources: NextPage = () => {
  return (
    <div>
        <Head>
        <title>ClueLess | Python Resources</title>
        <meta name="description" content="Generated by create next app" />
        </Head>
        <Navbar />
        <div className='px-28 flex justify-between items-center mt-16'>
                <h2 className='text-4xl font-semibold text-center sm:text-left'>🐍 Python Resources</h2>
                <FilterResource 
                type="python"
                />
            </div>
        <div className='grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:px-28 gap-10 mt-16'>
        {resources.map((resource) => {
          return (
            <div className='mx-auto'>
              <ResourceCard 
              img={resource.img}
              specificStack = {resource.stack}
              title = {resource.title}
              price = {resource.price}
              category = {resource.caterogy}
              givenBY = {resource.givenBY}
              givenByProfile = {resource.givenBYUrl}
              />
            </div>
          )
        })}
        </div>
    </div>
  )
}

export default Resources