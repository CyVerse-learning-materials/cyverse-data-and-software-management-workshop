.. include:: cyverse_rst_defined_substitutions.txt

|CyVerse logo|

Foundational Open Science Skills Workshop Series:

Practical Data and Software Skills for Reproducible Research
------------------------------------------------------------------------------------------------

Working with “Big data” is challenging for most researchers. These workshops
introduce free  open-source approaches that reduce these challenges and deliver
research that is more impactful, open, and reproducible. Technologies covered
feature solutions developed by publicly funded cyberinfrastructure developed in
the US (CyVerse - www.cyverse.org) and Europe (CyVerse UK, ELIXIR, and others).
Most content will be platform agnostic, giving attendees with skills they
can apply no matter what computing platforms they use.


----

Upcoming Workshops
~~~~~~~~~~~~~~~~~~~~~

  .. admonition:: Workshop Location

    **Rome, Italy - October 2019**

    **Host**: University of Arkansas

    **Location**: University of Arkansas Rome Center: Palazzo Taverna, Via di
    Monte Giordano, 36 - 00186 Rome Italy.

    **Dates**: Each workshop will run from afternoon to afternoon (see *Draft Agenda* below
    for times)

    - *Practical Data Skills Workshop*: October 2nd - October 3rd
    - *Practical Software Skills Workshop*: October 3rd - October 4th

    **Costs/Funding/Registration**: A fee of $40 US for each workshop ($80 US total if attending both) covers
    facility setup and administrative costs, as well as AM and PM refreshment
    breaks. Participants are responsible for all costs associated with their
    attendance (travel, lodging, meals, etc.). The workshop fee will cover
    There will be an optional luncheon between the workshops on Thursday October
    4 at a cost of $20 US.

    **Workshop Registration**:

    .. raw:: html

     <div id="eventbrite-widget-container-64003008722"></div>
     <script src="eb_widgets.js"></script>

     <script type="text/javascript">
         var exampleCallback = function() {
             console.log('Order complete!');
         };

         window.EBWidgets.createWidget({
             // Required
             widgetType: 'checkout',
             eventId: '64003008722',
             iframeContainerId: 'eventbrite-widget-container-64003008722',

             // Optional
             iframeContainerHeight: 425,  // Widget height in pixels. Defaults to a minimum of 425px if not provided
             onOrderComplete: exampleCallback  // Method called when an order has successfully completed
         });
     </script>
     </div>


    **Cancellations**

    In the event of insufficient enrollment, we reserve the right to cancel the
    workshops. We will confirm the workshop no later than 3 weeks prior to the
    start of the workshop (September 18th, 2019) or as soon as minimum
    enrollment is met. We strongly encourage you not to make non-refundable
    travel plans before you are notified the workshop is confirmed. In the event
    of a cancellation we will only refund your registration costs.

    You may cancel your attendance at the workshop at any time, but full refunds
    may only be available until September 25th, 2019 (1 week prior to workshop
    start).

----

Workshop Audiences, Learning Outcomes, and Prerequisites
```````````````````````````````````````````````````````````

*Practical Data Skills Workshop*
#################################

**Audience**

Investigators and researchers working in all areas of the life sciences.
Workshop delivery style will benefit those looking for information on and making
decisions about these technologies (e.g. principal investigators, grant writers,
funders/grant officers, etc.) but who may not actually use them day-to-day.

**Learning Outcomes**

At this workshop learners will:

- Be able to identify common challenges for large biological datasets
- Understand the value of  FAIR and other open science principles
- Understand how to apply free technologies for data sharing, metadata
  annotation, and repository hosting to their own use cases
- Be able to critique data management plans and create (or refine) a custom plan
  that benefits their lab and their research

**Prerequisites**

This workshop is suitable for a non-technical audience.
For computer labs, basic knowledge in working with spreadsheets (e.g. Excel)
is helpful. Attendees must bring their own Wi-Fi enabled laptop.


*Practical Software Skills Workshop*
######################################

**Audience**

Investigators and researchers working in all areas of the life sciences.
Workshop delivery style will benefit those looking for information on improving
how they use software in their research - from simple scripts developed in-house
to building robust, reproducible, and scalable, pipelines.

**Learning Outcomes**

At this workshop learners will:

- Be able to identify common reproducibility challenges for commonly used
  software
- Follow a series of case studies that introduce reproducibility technologies
  like version control (e.g. git, GitHub), containerization (Docker),
  and notebooks (Jupyter).
- Be able to deploy applications for reproducible analysis using Binder and CyVerse
- Understand (and be able to create) a software management plan that benefits
  their lab and their research

**Prerequisites**

This workshop will have several labs involving use of the
command line (Linux/Unix). Some basic command line experience is strongly
suggested. Attendees must bring their own Wi-Fi enabled laptop.

-----


Agendas
~~~~~~~~~~~~~~~~~~~~~

**Draft Agenda (subject to change)**

*Practical Data Skills Workshop*: October 2nd - October 3rd

**October 2nd**

.. list-table::
  :header-rows: 1

  * - Time
    - Topic
    - Objectives and Activities
  * - 14:00
    - Workshop overview and introduction to CyVerse - Technology for open
      science (*lecture*)
    - Brief overview of `CyVerse <http://www.cyverse.org>`_
      (publicly funded infrastructure project)
      and how it is being adopted internationality (CyVerse UK/Austria/Australia),
      how you can make free use of it, and how these and other technologies are
      relevant to European bioinformatics and infrastructure projects
      (e.g. `ELIXIR <https://elixir-europe.org/>`_ and `EOSC <https://ec.europa.eu/research/openscience/index.cfm?pg=open-science-cloud>`_).
      We will also introduce common tools and related vocabulary for
      computing in life science research.
  * - 14:30
    - FAIR in practice - Increasing the impact of your work through Open Science
      (*lecture and interactive discussion*)
    - Participants will get an introduction to the `FAIR principles <https://www.go-fair.org/fair-principles/>`_ and an
      overview of some of the major community projects and technological
      approaches for implementing FAIR and complying with mandates such as
      `Plan S <https://www.coalition-s.org/>`_. Key ideas and approaches to
      Open Science will be introduced. An interactive discussion on data
      management challenges will have participants work through sections of
      grant applications (their own and provided examples) to identify weak
      points in FAIRness.
  * - 15:30
    - Break
    -
  * - 15:45
    - Making data reusable and interoperable with metadata standards (*lecture*)
    - Participants will learn how community and repository standards can be
      selected and implemented for their own datasets.
  * - 16:15
    - Managing data with Open Refine (*lab*)
    - Using the free and open-source software `Open Refine <http://openrefine.org/>`_,
      participants will explore how metadata can be organized and validated to
      comply with their choice of metadata standards.
  * - 18:00
    - End of Day One
    -

**October 3rd**

.. list-table::
  :header-rows: 1

  * - Time
    - Topic
    - Objectives and Activities
  * - 9:00
    - Associating data with Metadata (*lab*)
    - Users will be guided through associating metadata with data on the CyVerse
      platform using its graphical interface to `iRODS <https://irods.org/>`_
      (a data storage technology used by several international repositories)
  * - 9:30
    - Making data available through repositories (*lecture*)
    - We will introduce popular repositories and the typical
      requirements for publication of datasets including choices of licensing.
  * - 10:00
    - CyVerse Data Commons publication model (*lab*)
    - Participants will be guided through making data available and citable
      (DOI issuing) on the CyVerse data store. We will also demonstrate
      publication directly from CyVerse to NCBI and also ENA using `COPO <https://copo-project.org/>`_.
  * - 10:30
    - Break
    -
  * - 10:45
    - Increasing the value of your work with pre-prints and getting credit with
      data licensing (*lecture*)
    - We will discuss the evidence and some available solutions for making use
      of pre-prints and solutions for choosing a data license.
  * - 11:15
    - Making a data management plan work for you (*lab and interactive discussion*)
    - Participants will start to summarize lessons learned by completing a
      Data Stewardship wizard and generating an updated data management plan
  * - 11:45
    - Summary and Road mapping (*lab and interactive discussion*)
    - Participants will work in small teams to develop learning roadmaps to be
      implemented post-workshop (How will the workshop change what they are now
      doing? What questions do they still have? What technologies would the like
      more information on? etc.). These will be shared and collected and the
      instructional team will leave additional feedback and suggestions on the
      maps during and shortly after the workshop.
  * - 13:30
    - Finish (End of Workshop)
    - Lunch available (purchase ticket at Eventbrite link)

----

**13:30 October 3rd - Lunch will be available at the Workshop Venue**:
Eventbrite ticket purchase required.

----

*Practical Software Skills Workshop*: October 3rd - October 4th

**October 3rd**

.. list-table::
  :header-rows: 1

  * - Time
    - Topic
    - Objectives and Activities
  * - 14:30
    - Workshop overview and Introduction to CyVerse - Technology for Open Science (*lecture*)
    - Brief overview of `CyVerse`_
      (publicly funded infrastructure project)
      and how it is being adopted internationality (CyVerse UK/Austria/Australia),
      how you can make free use of it, and how these and other technologies are
      relevant to European bioinformatics and infrastructure projects (e.g. `ELIXIR`_ and `EOSC`_).
      We will also introduce common tools and related vocabulary for
      computing in life science research.
  * - 15:00
    - 4OSS - Introduction to Open Source Software Principles (*lecture*)
    - Participants will learn about the `4OSS principles <https://softdev4research.github.io/recommendations/>`_
      and how they support reproducible, high-impact science through sustainable
      software and computing choices.
  * - 15:30
    - Break
    -
  * - 15:45
    - Github for software management and reproducibility - a brief introduction
      to Github (*lab*)
    - Participants will get an brief introduction to repository creation in `Github <https://github.com/>`_
      and learn the value of developing code that is open from day one.
      Introduction of licensing and recommendations for fostering and
      managing contributions.
  * - 17:30
    - Containers for Computing (*lab*)
    - Participants will be introduced to `Docker <https://www.docker.com/>`_ as a solution for software
      reproducibility, portability, and management. We will cover the basics of
      Docker and describe the process of pulling and running containers,
      including from popular repositories such as docker hub and biocontainers.
  * - 18:30
    - End of Day One
    -


**October 4th**

.. list-table::
  :header-rows: 1

  * - Time
    - Topic
    - Objectives and Activities
  * - 9:00
    - Managing applications in Notebooks (*lab*)
    - Participants will cover the use of Docker to manage applications
      to deploy applications and use `Jupyter notebooks <https://jupyter.org/>`_
      to interface with applications.
  * - 10:30
    - Break
    -
  * - 11:15
    - Deploying applications (*lab*)
    - Participants will take applications developed in the workshop and see how
      they can be deployed as usable applications in CyVerse as well as
      `My Binder <https://gke.mybinder.org/>`_.
  * - 13:30
    - Summary and Road mapping (*lab and interactive discussion*)
    - Participants will work in small teams to develop learning roadmaps to be
      implemented post-workshop (How will the workshop change what they are now
      doing? What questions do they still have? What technologies would the like
      more information on? etc.). These will be shared and collected and the
      instructional team will leave additional feedback and suggestions on the
      maps during and shortly after the workshop.
  * - 14:30
    - Finish (End of Workshop)
    -

----

Pre-Workshop Setup
~~~~~~~~~~~~~~~~~~~~~

**Detailed Instructions Coming Soon**

----

Questions
``````````

For workshop content questions, please email Jason Williams
(Cold Spring Harbor Laboratory, NY). Williams@cshl.edu.

Content/Instruction Contributions
`````````````````````````````````````

If you are interested in helping to further develop this workshop content, please
also contact Jason at the address above, including if you are interested in
helping as a volunteer as a TA at the workshop (unfortunately no funding
is available for volunteers).

For participants interested in adapting/teaching future versions of this workshop
please also let us know - we will have informal post-workshop sessions to help
plan and promote future activities.

Organizers, Content Developers, and Instructional Team, Rome 2019
``````````````````````````````````````````````````````````````````````

- **Douglas Rhoads (Host)**

  University Professor of Biological Sciences
  Director, Cell and Molecular Biology Program
  University of Arkansas

- **Allegra Via**

  Institute for Molecular Biology and Pathology,
  The National Research Council of Italy

- **Jason Williams**

  Email (`williams@cshl.edu <mailto:williams@cshl.edu>`_)

  \*(Contact Jason for all workshop related questions)

  Assistant Director, External Collaborations
  Cold Spring Harbor Laboratory, DNA Learning Center
  CyVerse Education Outreach and Training Lead

- **Robert Davey**

  Group Leader
  Earlham Institute

- **Fotis Psomopoulos**

  Research Assistant Professor
  Institute of Applied Biosciences (INAB)
  Center for Research and Technology Hellas (CERTH)

- **Mateusz Kuzak**

  Scientific Community Manager
  Dutch Techcentre for Life Sciences

- **Ramona L. Walls**

  Senior Scientific Analyst, CyVerse
  Assistant Research Professor, Bio5 Institute
  University of Arizona

----

About CyVerse
~~~~~~~~~~~~~~~~~~~~~

**CyVerse Vision:** Transforming science through data-driven discovery.

**CyVerse Mission:** Design, deploy, and expand a national
cyberinfrastructure for life sciences research and train scientists in
its use. CyVerse provides life scientists with powerful computational
infrastructure to handle huge datasets and complex analyses, thus
enabling data-driven discovery. Our powerful extensible platforms
provide data storage, bioinformatics tools, image analyses, cloud
services, APIs, and more.

While originally created with the name iPlant Collaborative to serve
U.S. plant science communities, CyVerse cyberinfrastructure is germane
to all life sciences disciplines and works equally well on data from
plants, animals, or microbes. By democratizing access to supercomputing
capabilities, we provide a crucial resource to enable scientists to find
solutions for the future. CyVerse is of, by, and for the community, and
community-driven needs shape our mission. We rely on your feedback to provide
the infrastructure you need most to advance your science, development, and
educational agenda.

**CyVerse Homepage:** `http://www.cyverse.org <http://www.cyverse.org>`_

----

Funding and Citations
~~~~~~~~~~~~~~~~~~~~~

CyVerse is funded entirely by the National Science Foundation under
Award Numbers DBI-0735191 and DBI-1265383.

Please cite CyVerse appropriately when you make use of our resources,
`CyVerse citation
policy <http://www.cyverse.org/acknowledge-cite-cyverse>`__

.. |CyVerse logo| image:: ./img/cyverse_rgb.png
	:width: 500
	:height: 100

.. |platform_stack| image:: ./img/cyverse_platform_stack.png
  :width: 750
  :height: 700
