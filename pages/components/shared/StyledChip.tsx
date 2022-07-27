import React from 'react'

interface Props {
    text: string
    size : 'xl' | 'sm' | 'xs' | 'lg' | 'md',
    rounded: 'xl' | 'sm' | 'xs' | 'lg' | 'md' | '2xl' | '3xl'
}

const StyledChip: React.FC<Props> = ({ text, size, rounded }) => {
    return (
        <div className={`bg-[#A1BFF9] px-3 py-2 font-bold text-${size} rounded-${rounded} my-2 xl:my-0`}>
            {text}
        </div>
    )
}

export default StyledChip