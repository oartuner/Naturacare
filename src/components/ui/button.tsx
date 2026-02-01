import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'default';
    size?: 'sm' | 'md' | 'lg' | 'icon';
    isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', isLoading, children, ...props }, ref) => {

        const variants = {
            primary: 'bg-primary-900 text-white hover:bg-primary-800 shadow-md',
            secondary: 'bg-accent-500 text-white hover:bg-accent-600 shadow-sm',
            outline: 'border border-primary-200 bg-transparent hover:bg-primary-50 text-primary-900',
            ghost: 'bg-transparent hover:bg-gray-100 text-primary-900',
            link: 'bg-transparent underline-offset-4 hover:underline text-primary-900 p-0 h-auto',
            default: 'bg-primary-900 text-white hover:bg-primary-800 shadow-md', // Fallback for 'default'
        };

        const sizes = {
            sm: 'h-9 px-4 text-sm',
            md: 'h-11 px-6 text-base',
            lg: 'h-14 px-8 text-lg',
            icon: 'h-10 w-10 p-0',
        };

        return (
            <button
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center rounded-none font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-900 disabled:pointer-events-none disabled:opacity-50 font-serif tracking-wide active:scale-95',
                    variants[variant as keyof typeof variants] || variants.primary,
                    sizes[size as keyof typeof sizes] || sizes.md,
                    className
                )}
                disabled={isLoading || props.disabled}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {children}
            </button>
        );
    }
);
Button.displayName = 'Button';

export { Button };
