import React from 'react'
import { getSiteProps } from 'react-static'

import ExperienceList from '../components/ExperienceList'

//
export default getSiteProps(({ title }) => (
    <div>
        <section className="hero">
            {title}
        </section>
        <section className="one">
            <h1>Why should you hire me?</h1>
            <pre>
                {'I have a massive skillset that would be valuable regardless of where I get put.\n'}
                {'I have experience in DevOps, Frontend Development, Backend Development, Mobile Development, Kernel/Win32 Development, Reverse Engineering'}
                <ExperienceList />
            </pre>
        </section>
    </div>
))
