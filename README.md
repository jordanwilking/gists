<br />
<p align="center">
  <h3 align="center">Gists</h3>
  <p align="center">
    Search tool for fetching and favoriting users' Github gists
    <br />
    <a href="https://jordanwilking.github.io/">View Demo</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#ideas-for-improvement">Ideas for Improvement</a></li>
    <li><a href="#tradeoffs">Tradeoffs</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these steps.

1. Clone the repo
   ```sh
   git clone https://github.com/jordanwilking/gists.git
   ```
2. Install npm packages
   ```sh
   npm install
   ```
3. Run the program
   ```sh
   npm start
   ```

To run tests

```sh
npm test
```

<!-- IDEAS FOR IMPROVEMENT -->

## Ideas for Improvement

Some ideas for the project if it was intended for production

- Consider Redux or Graphql to better manage global data and caching
- Caching
  - Check if previous user's gists are in the cache before calling
  - Store more user's gists at a time?
  - Add the GistWithContent to the prevSearch to grab previous search faster
- Theming
- Improve mobile experience
- Favorites route to display all starred gists
- Settings
  - Change themes
  - Change react-syntax-highlighter option
- Filtering and sorting
  - language, date, (un)starred
- Paging (number of gists could exceed the amount retrieved my the api call)
- User system
  - Currently the search works pretty well as a standalone, with data saved locally
- Animations
  - Search bar could start in middle and move up when searched
- Store last X search terms and autocomplete/predictive text
- Priority heap for snackbars
  - Prioritize: errors, warning, info, success (might be a bit more nuanced)
  - Decay snacks when too many have accumulated
- Allow full expansion of standard cards
- Virtualize card list, so fewer are rendered at a time
- Consider server side rendering
- Improve reusability of some components
- Consider consolidating card options
- Performance
  - MUI Tooltip causes slowdown
  - react-syntax highlighter performance is abysmal - had to get rid of the tooltips to make it work
- Alternate syntax highlighter
  - Prismjs is pretty painful for this usecase
  - react-syntax-highlighter has poor performance
- Testing
  - More robust
  - Don't package it
- More robust error-handling
  - Validate gists before and after storing them
- Skeleton improvements
  - more detail
  - shared styles with shadowed components?
- More information
  - show that file has been truncate
  - grab longer files
- Usability
  - Add aria tags
  - Reduce width of cards for easier scrolling
- Error log
- Improve search state
  - loading feels uncomfortable
- optimistic responses for favoriting
- Favorites route
  - No limits on how many items could be there (paging and/or virtualization)
  - Inefficient way of removing starred items (localStorage live updates)
  - Don't pass showUser through so many props (context?)
- Transitions
  - Between pages
  - As cards are deleted

<!-- TRADEOFFS -->

## Tradeoffs

- Removed most mui tooltips
  - [Performance] was poor with many on page at once.
  - [Performance] Didn't play well with react-syntax-highlighter
- Removed star/unstar snacks
  - [Bad Usability] starring and unstarring too many creates a large number of snacks

<!-- CONTACT -->

## Contact

LinkedIn: [https://www.linkedin.com/in/j-wilk/](https://www.linkedin.com/in/j-wilk/)

Project Link: [https://github.com/jordanwilking/gists](https://github.com/jordanwilking/gists)
