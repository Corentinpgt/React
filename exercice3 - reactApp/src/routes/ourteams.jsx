import { Await, defer, useLoaderData } from "react-router-dom";
import { fetchOurTeams } from "../lib/loaders";
import { fetchTestimonialData } from "../lib/loaders";
import Teams from '../ui/Team';
import Testimonial from  '../ui/Testimonial';
import TeamSkeleton from '../ui/Team/TeamSkeleton'

import { Suspense } from "react";



export async function loader({params}) {
    let teamData = fetchOurTeams(params.teamName);
    let testiData = await fetchTestimonialData(params.teamName);
    return defer({team:teamData, testimonial:testiData});
}

export default function OurTeams() {

  const data = useLoaderData();
    return (
      <>
      <Suspense fallback={<TeamSkeleton/>}>
        <Await resolve={data.team}>

            {teamData => <Teams {...teamData}/> } 

        </Await>
        
        <Testimonial data={data.testimonial}/>
      </Suspense>
      </>
    );
  }