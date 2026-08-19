import {defineQuery} from 'next-sanity'

export const RATES_QUERY = defineQuery(`*[_type == "rates"]`)


export const MEMBERSHIPS_QUERY = defineQuery(`*[_type == "memberships"][0] {
  individual {
    ...,
    individualPdf {
      asset-> { url }
    }
  },
  family {
    ...,
    familyPdf {
      asset-> { url }
    }
  },
  corporate {
    ...,
    corporatePdf {
      asset-> { url }
    }
  },
  seniorIndividual {
    ...,
    seniorIndividualPdf {
      asset-> { url }
    }
  },
  seniorCouple {
    ...,
    seniorCouplePdf {
      asset-> { url }
    }
  }
}`)


export const EVENTS_QUERY = defineQuery(`*[_type == "events"] {
  ...,
  flyer {
    asset-> {
      url
    }
  },
  linkDeets {
    linkText,
    linkURL
  }
}`)


export const TICKER_QUERY = defineQuery(`*[_type == "ticker"][0] {
  tickerQuestion,
  tickerArray
}`)


export const MENU_QUERY = defineQuery(`{
  "entrees": *[_id == "menu-entrees"][0] { title, description, items },
  "quickBites": *[_id == "menu-quick-bites"][0] { title, description, items },
  "grabAndGo": *[_id == "menu-grab-and-go"][0] { title, description, items },
  "drinks": *[_id == "menu-drinks"][0] { title, description, items }
}`)
