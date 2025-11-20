## Intro

This is an assignment as part of a Frontend Developer role. Built using React, TypeScript and Tailwing with Redux as state management.

[Live demo](https://claross.netlify.app/)
[Github link](https://github.com/rk-codeflow/claros-dashboard)

## Installation

```bash
npm install
```

```bash
npm run dev
```

## Inspiration:

In order to prepare a UI, I did some research. I looked over Pinterest, Google Search and a site called uidesigndaily and few others. Since I already have prior experience with dashboard-related projects, it made the work much easier.

## API Integration

I have used a public api called [Fakestore](https://fakeapi.platzi.com/en) but it has a downside which I figured later. The data changes frequently and sometimes no data would be displayed. In such case, please have a patience and try later.

## State Management

Redux has been used for managing states as requested in assignment.

## Testing

As I don't have a prior experience of any testing library, I could not implement. But definitely I will learn. I did manual QA to be honest.

## Branches

Separate branches have been created for doing different thing

1. pagination-v2 => I found some issues like when I moved to next page, even if there were no items Next button was not disabled. Fixed that.

2. filtering-v2 => This branch was created to fix filtering issue. When I moved to next page, even if there was an item, it was not displayed. No items found was being displayed.

3. add-new-list => Initially, only two menu items were there and the UI looked unfinished. More items were added just to add aesthetics.
