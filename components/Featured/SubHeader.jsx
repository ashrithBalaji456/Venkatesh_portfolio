import React from 'react';

const SERVICES = [
  {
    title: 'Java & Spring Ecosystem',
    body: 'Java, Spring Boot, Spring Data JPA, Hibernate, RESTful APIs, and robust Layered Architecture (Controller-Service-Repository).'
  },
  {
    title: 'Database Architecture & ORM',
    body: 'PostgreSQL, MySQL, schema modeling, relational data consistency, transactional integrity, and optimized JPA queries.'
  },
  {
    title: 'API Engineering & Tooling',
    body: 'Postman automated API testing, Maven lifecycle management, Git/GitHub collaboration, and clean endpoint documentation.'
  },
  {
    title: 'Enterprise & Solutions',
    body: 'Salesforce Certified integration, Concurrency-safe Ticket Booking engines, Hospital ERP workflows, and secure CRUD operations.'
  }
];

export default function SubHeader() {
  return (
    <div className='w-full flex flex-col items-start text-left px-4 md:px-0'>
      <div className='w-full text-base md:text-lg lg:text-xl flex flex-col gap-3 leading-relaxed text-fg font-medium'>
        <p>Hi, I'm Venkateswarlu Kaki, a Java Backend Developer and Software Engineer based in Hyderabad, India.</p>
        <p>I specialize in building CRUD-based enterprise applications using layered architecture, high-efficiency REST APIs, and resilient data layers powered by Spring Boot and PostgreSQL.</p>
      </div>
      <div className='about-inline-services w-full mt-8 md:mt-12'>
        <div className='about-inline-services__head'>
          <span className='about-inline-services__label'>CORE EXPERTISE &amp; TECHNICAL SKILLS</span>
        </div>
        <div className='about-inline-services__grid'>
          {SERVICES.map((s) => (
            <article key={s.title} className='about-inline-services__item'>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
