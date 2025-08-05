import dynamic from 'next/dynamic'

const WebsiteLayout = dynamic(() => import('@/components/website-layout'))


const Layout = ({
    children,
}: {
    children: React.ReactNode
}) => {

    return (
        <WebsiteLayout>
            {children}
        </WebsiteLayout>
    )
}

export default Layout