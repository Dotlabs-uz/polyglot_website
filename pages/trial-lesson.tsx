import Entry from '@/components/Entry'
import TranslateContext from '@/context/useTranslate';
import Layout from '@/layout/Layout';
import React, { useContext } from 'react'

const TrialLesson = () => {
    let translation: any = useContext(TranslateContext);

    return (
        <Layout>
            <section className='pt-20 pb-52'>
                <Entry translation={translation?.entry} />
            </section>
        </Layout>
    )
}

export default TrialLesson
