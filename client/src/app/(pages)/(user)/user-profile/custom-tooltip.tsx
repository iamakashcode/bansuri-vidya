import type React from "react"
import { useState } from "react"

interface TooltipProps {
    content: string
    children: React.ReactNode
}

const CustomTooltip: React.FC<TooltipProps> = ({ content, children }) => {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <div className="relative inline-block">
            <div onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
                {children}
            </div>
            {isVisible && (
                <div className="absolute z-10 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm tooltip dark:bg-gray-700">
                    {content}
                </div>
            )}
        </div>
    )
}

export default CustomTooltip

