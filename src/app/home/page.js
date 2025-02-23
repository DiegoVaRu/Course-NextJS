import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DevitPanel from "@/components/layout/DevitPanel";
import { timeline } from "../api/statuses/home_timeline/route";

export default function HomePage({ profilePicture }) {
    return (
        <>
            <Header 
            domain="Home"
            avatar={profilePicture} />

            <main>
                <DevitPanel devits={timeline} />
            </main>

            <Footer />
        </>
    )
}