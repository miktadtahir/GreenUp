import Container from "@components/ui/container";
import { getLayout } from "@components/layout/layout";
import NewArrivalsProductFeed from "@components/product/feeds/new-arrivals-product-feed";
import ProductsFeatured from "@containers/products-featured";
import Subscription from "@components/common/subscription";
import HeroSlider from "@containers/hero-slider";
import SaleBannerGrid from "@containers/sale-banner-grid";
import {
    trendyDemoHeroBanner as heroBanner,

} from "@data/static/banners";
import Divider from "@components/ui/divider";
import React from "react";

export { getStaticProps } from "@framework/ssr/homepage/trendy";

export default function Home() {
    return (
        <>
            <Container>
                <Divider />
                <HeroSlider data={heroBanner} paginationPosition="left" />
                <SaleBannerGrid />

                <ProductsFeatured
                    sectionHeading="text-featured-products"
                    variant="combined"
                    limit={4}
                />
                <NewArrivalsProductFeed />
                <Subscription
                    className="px-5 sm:px-8 md:px-16 2xl:px-24 relative overflow-hidden sm:items-center lg:items-start"
                    variant="modern"
                />
            </Container>
        </>
    );
}

Home.getLayout = getLayout;
