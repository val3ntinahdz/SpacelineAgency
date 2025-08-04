// components/ui/glow-circle.jsx
import { motion } from "framer-motion";

export const GlowCircle = ({ 
    color, 
    size = 'md', 
    position = 'center', 
    opacity = '100',
    animate = true
}) => {
    const sizeClasses = {
        'sm': 'w-32 h-32',
        'md': 'w-64 h-64',
        'lg': 'w-96 h-96',
        'xl': 'w-[500px] h-[500px]'
    };
    
    const positionClasses = {
        'top-left': 'top-0 left-0',
        'top-right': 'top-0 right-0',
        'bottom-left': 'bottom-0 left-0',
        'bottom-right': 'bottom-0 right-0',
        'center': 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
    };
    
    const animationProps = animate ? {
        initial: { 
            x: position.includes('right') ? 100 : position.includes('left') ? -100 : 0,
            y: position.includes('top') ? -100 : position.includes('bottom') ? 100 : 0
        },
        animate: {
            x: position.includes('right') ? [100, 150, 100] : position.includes('left') ? [-100, -150, -100] : 0,
            y: position.includes('top') ? [-100, -150, -100] : position.includes('bottom') ? [100, 150, 100] : 0,
        },
        transition: {
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
        }
    } : {};
    
    return (
        <motion.div 
            {...animationProps}
            className={`absolute ${positionClasses[position]} ${sizeClasses[size]} rounded-full filter blur-3xl opacity-${opacity}`}
            style={{ backgroundColor: color }}
        />
    )
}