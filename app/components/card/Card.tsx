

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface CardProps {
    image: string;
}

const Card: React.FC<CardProps> = ({ image }) =>{
    return (
        <motion.div 
            className="relative overflow-hidden h-[50px] min-w-[100px] rounded-xl flex"
        >
            <Image src={image} alt={image} fill/>
        </motion.div>
    )
}

export default Card;