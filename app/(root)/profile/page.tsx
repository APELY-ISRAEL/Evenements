import Collection from '@/components/shared/collection'
import { Button } from '@/components/ui/button'
import { getEventsByUser } from '@/lib/actions/event.action'
import { auth } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const ProfilePage = async () => {
    const { sessionClaims } = auth();
    const userId = sessionClaims?.userId as string;
    const OrganizedEvents = await getEventsByUser({ userId, page: 1 })
    return (
        
    <>
    <section className='bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10'>
        <div className='wrapper flex items-center justify-center sm:justify-between'></div>
      <h3 className='h3-bold text-center sm:text-left'>My Tickets</h3>
      <Button asChild size="lg" className='button hidden sm:flex'>
    <Link href="/#event">
        Explore more Events
    </Link>
      </Button>
        </section>

        {/* <section className='wrapper my-8'>
        <Collection
         data={events?.data}
          emptyTitle="No Events tickect purchased yet"
          emptyStateSubtext="No worries - plenty of exciting events to explore "
          collectionType="My_Tickets"
          limit={3}
          page={1}
          urlParamName='ordersPage'
          totalPages={2}
          />  
        </section> */}

        <section className='bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10'>
        <div className='wrapper flex items-center justify-center sm:justify-between'></div>
      <h3 className='h3-bold text-center sm:text-left'>Event Organized</h3>
      <Button asChild size="lg" className='button hidden sm:flex'>
    <Link href="/events/create">
        Create New Events
    </Link>
      </Button>
        </section>
        <section className='wrapper my-8'>
        <Collection
         data={OrganizedEvents?.data}
          emptyTitle="No Events have been created yet"
          emptyStateSubtext="Go create some now"
          collectionType="Events_Organized"
          limit={6}
          page={1}
          urlParamName='eventsPage'
          totalPages={2}
          />  
        </section>
        </>
  )
}

export default ProfilePage