import React from 'react'

export const PaginationBar = ({noOfPage, setCurrentPage}) => {
    const handlePageChange = (n) => {
        setCurrentPage(n)

    }
  return (
    <div className='flex gap-2 mx-8 mt-10'>
       {[...Array(noOfPage).keys()].map(n => (
         <span  onClick={()=> handlePageChange(n)} className='border rounded-lg p-2 cursor-pointer' key={n}>{n}</span>
       ))}

    </div>
  )
}
