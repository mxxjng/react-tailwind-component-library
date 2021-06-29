import Link from 'gatsby-link';
import React from 'react';
import ArrowRight from '../ArrowRight';

interface CtaLinkProps {
    to: string;
    label: string;
    color?: string;
    reversed?: boolean;
    className?: string;
    divOnly?: boolean;
    isVisible?: boolean;
}

const CtaLink: React.FC<CtaLinkProps> = ({
    to,
    label,
    color = 'text-primary hover:text-bg focus:text-black',
    reversed,
    className,
    divOnly,
    isVisible,
}) => {
    const isExternal = ['http:', 'https:', 'mailto:', 'tel:'].some(
        prefix => !!~to?.indexOf(prefix)
    );
    const shouldOpenNewTab = ['http:', 'https:'].some(
        prefix => !!~to?.indexOf(prefix)
    );

    const linkContent = (
        <>
            {isVisible ? (
                <>
                    <span className={reversed ? 'ml-3' : 'mr-3'}>{label}</span>

                    <ArrowRight
                        className={`flex-shrink-0 h-2.5 w-auto transform ${
                            reversed && 'rotate-180'
                        }`}
                    />
                </>
            ) : (
                <>
                    <span className="">{label}</span>
                </>
            )}
        </>
    );

    return divOnly ? (
        <div
            className={`flex items-center text-sm font-semibold transition ${color} ${className} ${
                reversed && 'flex-row-reverse'
            }`}
        >
            {linkContent}
        </div>
    ) : isExternal ? (
        <a
            href={to}
            className={`flex items-center text-sm font-semibold transition ${color} ${className} ${
                reversed && 'flex-row-reverse'
            }`}
            target={shouldOpenNewTab ? '_blank' : undefined}
        >
            {linkContent}
        </a>
    ) : (
        <Link
            to={to}
            className={`flex items-center text-sm font-semibold transition ${color} ${className} ${
                reversed && 'flex-row-reverse'
            }`}
        >
            {linkContent}
        </Link>
    );
};

export default CtaLink;
