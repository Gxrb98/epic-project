import { useRouter } from "next/router";

function About() {
    const router = useRouter();
    const data = router.query;
    console.log(data);
    return (data.slug);
}

export default About;