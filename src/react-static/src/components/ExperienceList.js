import React from 'react'

class ExperienceList extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            experience: [
                {
                    name: 'Web',
                    items: [
                        {
                            name: 'CSS',
                            confidence: 100,
                        },
                        {
                            name: 'HTML',
                            confidence: 100,
                        },
                        {
                            name: 'JavaScript',
                            confidence: 90,
                        },
                        {
                            name: 'Django',
                            confidence: 70,
                        },
                        {
                            name: 'React',
                            confidence: 90,
                        },
                    ],
                },
                {
                    name: 'DevOps',
                    items: [
                        {
                            name: 'Azure',
                            confidence: 70,
                            items: [
                                'WebJobs',
                                'Machine Learning',
                            ],
                        },
                        {
                            name: 'AWS',
                            confidence: 80,
                            items: [
                                'RDS',
                                'EC2',
                                'Elastic Beanstalk',
                            ],
                        },
                    ],
                },
            ],
        }
    }

    render () {
        return (
            <ul>
                {this.state.experience.map(e => <li>{e.name}</li>)}
            </ul>
        )
    }
}

export default ExperienceList
