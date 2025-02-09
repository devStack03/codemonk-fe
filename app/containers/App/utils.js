import React from 'react';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import StorageService from 'utils/StorageService';
import history from 'utils/history';
import { localeInfo } from 'containers/TalentListingPage/constants';
import { textItemRender } from 'containers/TalentListingPage/utils';
import ShowMoreText from 'components/ShowMore/ShowMoreText';
import parse from 'html-react-parser';
import { StyledPagination } from 'components';
import { TALENT_PARTNER, AMBASSADOR, TALENT, AGENCY, CLIENT } from './constants';
import 'rc-pagination/assets/index.css';

export const checkForZero = temp => {
  let output = 1;
  if (temp.length >= 1) {
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].rating === 0 || temp[i].rating === undefined) {
        output = 0;
        break;
      }
    }
  }
  return output;
};

// freelancer talent user
export const stepSize = step => {
  const registerType = StorageService.get('registerType');
  const totalSteps = registerType === 'agency' ? 7 : 9;
  const stepValue = Math.ceil(100 / totalSteps);
  return stepValue * step;
};

export const redirectToPage = (history, redirection, step, currentStep) => {
  if (step !== currentStep && !redirection) {
    switch (+step) {
      case 0:
        history.replace(`${TALENT}/registration-type`);
        break;
      case 1:
        history.replace(`${TALENT}/about-you`);
        break;
      case 2:
        history.replace(`${TALENT}/qualifications`);
        break;
      case 3:
        history.replace(`${TALENT}/experience`);
        break;
      case 4:
        history.replace(`${TALENT}/projects`);
        break;
      case 5:
        history.replace(`${TALENT}/preferences`);
        break;
      case 6:
        history.replace(`${TALENT}/salary-billing`);
        break;
      case 7:
        history.replace(`${TALENT}/document-upload`);
        break;
      case 8:
        history.replace(`${TALENT}/dashboard`);
        break;
      default:
    }
  }
};

export const onBoardingPages = [
  { page: 0, url: '/about-you' },
  { page: 1, url: '/about-you' },
  { page: 2, url: '/qualifications' },
  { page: 3, url: '/experience' },
  { page: 4, url: '/projects' },
  { page: 5, url: '/preferences' },
  { page: 6, url: '/salary-billing' },
  { page: 7, url: '/document-upload' },
  { page: 8, url: '/dashboard' },
];

export const redirectPageURL = step => {
  let output = '';
  output = TALENT + onBoardingPages[step].url;
  return output;
};

// agencyUser
export const agencyStepSize = step => {
  const totalSteps = 7;
  const stepValue = 100 / totalSteps;
  return stepValue * step;
};

export const agencyOnBoardingPages = [
  { page: 0, url: '/registration-type' },
  { page: 1, url: '/create-profile' },
  { page: 2, url: '/add-talents' },
  { page: 3, url: '/agency-certificate' },
  { page: 4, url: '/payout-details' },
  { page: 5, url: '/add-directors-shareholders' },
  { page: 6, url: '/documents' },
  { page: 7, url: '/dashboard' },
];

export const agencyRedirectPageURL = step => {
  let output = '';
  output = AGENCY + agencyOnBoardingPages[step].url;
  return output;
};

export const agencyRedirectToPage = (history, redirection, step, currentStep) => {
  if (step !== currentStep && !redirection) {
    switch (step) {
      case 0:
        history.replace(`${AGENCY}/registration-type`);
        break;
      case 1:
        history.replace(`${AGENCY}/create-profile`);
        break;
      case 2:
        history.replace(`${AGENCY}/add-talents`);
        break;
      case 3:
        history.replace(`${AGENCY}/agency-certificate`);
        break;
      case 4:
        history.replace(`${AGENCY}/payout-details`);
        break;
      case 5:
        history.replace(`${AGENCY}/add-directors-shareholders`);
        break;
      case 6:
        history.replace(`${AGENCY}/documents`);
        break;
      case 7:
        history.replace(`${AGENCY}/dashboard`);
        break;
      default:
    }
  }
};

// client User
export const clientStepSize = step => {
  const totalSteps = 1;
  const stepValue = 100 / totalSteps;
  return stepValue * step;
};
export const clientRedirectToPage = (history, redirection, step, currentStep) => {
  if (step !== currentStep && !redirection) {
    switch (step) {
      case 0:
        history.replace(`${CLIENT}/verification`);
        break;
      case 1:
        history.replace(`${CLIENT}/about-you`);
        break;
      case 2:
        history.replace(`${CLIENT}/about-company`);
        break;
      case 3:
        history.replace(`${CLIENT}/company-location`);
        break;
      case 4:
        history.replace(`${CLIENT}/dashboard`);
        break;
      default:
    }
  }
};

export const clientOnBoardingPages = [
  { page: 0, url: '/about-you' },
  { page: 1, url: '/about-company' },
  { page: 2, url: '/company-location' },
  { page: 3, url: '/dashboard' },
];

export const clientRedirectPageURL = step => {
  let output = '';
  output = CLIENT + clientOnBoardingPages[step].url;
  return output;
};

export const loginLink = '/login';
export const forgotPasswordLink = '/forgot-password';
export const verifyEmailLink = '/verifyemail';
export const signupLink = '/';
export const recruiterSignupLink = `${TALENT_PARTNER}/signup`;
export const recruiterLoginLink = `${TALENT_PARTNER}/login`;
export const ambassadorSignupLink = `${AMBASSADOR}/signup`;
export const ambassadorLoginLink = `${AMBASSADOR}/login`;

export const getBadgeClass = status => {
  let output = '';
  switch (status) {
    case 'Requested':
    case 'Proposed':
    case 'Invited':
      output = 'light';
      break;
    case 'Discovery':
    case 'Settled':
    case 'Hired':
      output = 'primary';
      break;
    case 'Suspended':
    case 'Suspend':
    case 'On Hold':
      output = 'danger';
      break;
    case 'In Progress':
    case 'Active':
    case 'Approved':
    case 'Verified':
      output = 'success';
      break;
    case 'Kick-off':
    case 'Unregistered':
    case 'Registered':
    case 'Submitted':
    case 'In review':
      output = 'warning';
      break;
    case 'Closed':
    case 'Done':
      output = 'alert';
      break;
    default:
  }
  return output;
};

export const recruiterOnBoardingPages = [
  { page: 0, url: '/about-you' },
  { page: 1, url: '/about-company' },
  { page: 2, url: '/dashboard' },
];

export const recruiterRedirectPageURL = step => {
  let output = '';
  output = TALENT_PARTNER + recruiterOnBoardingPages[step].url;
  return output;
};

export const recruiterRedirectToPage = (history, redirection, step, currentStep) => {
  if (step !== currentStep && !redirection) {
    switch (step) {
      case 0:
        history.replace(`${TALENT_PARTNER}/about-you`);
        break;
      case 1:
        history.replace(`${TALENT_PARTNER}/about-company`);
        break;
      case 2:
        history.replace(`${TALENT_PARTNER}/dashboard`);
        break;
      default:
    }
  }
};

export const ambassadorOnBoardingPages = [
  { page: 0, url: '/about-you' },
  { page: 1, url: '/about-company' },
  { page: 2, url: '/dashboard' },
];

export const ambassadorRedirectPageURL = step => {
  let output = '';
  output = AMBASSADOR + ambassadorOnBoardingPages[step].url;
  return output;
};

export const ambassadorRedirectToPage = (history, redirection, step, currentStep) => {
  if (step !== currentStep && !redirection) {
    switch (step) {
      case 0:
        history.replace(`${AMBASSADOR}/about-you`);
        break;
      case 1:
        history.replace(`${AMBASSADOR}/about-company`);
        break;
      case 2:
        history.replace(`${AMBASSADOR}/dashboard`);
        break;
      default:
    }
  }
};

export const redirectTo = (history, pathname, extra = {}) => {
  history.push({
    pathname,
    extra,
  });
};

export const redirectToType = (pathname, type, extra = {}) => {
  history.push({
    pathname,
    redirection: type,
    extra,
  });
};

export const talentProfileRedirect = (history, pathname, id, type, extra = {}) => {
  history.push({
    pathname: `${pathname}${id}`,
    redirection: type,
    extra,
  });
};

export const redirectBack = (history, pathname, tab) => {
  history.push({
    pathname,
    tab,
  });
};

export const getPageData = (data, pageNum, pageSize) => {
  const pageStart = (pageNum - 1) * pageSize;
  const pageEnd = pageNum * pageSize - 1;
  const startIndex = pageStart;
  const endIndex = pageEnd > data.length - 1 ? data.length - 1 : pageEnd;

  const newData = [];
  for (let i = startIndex; i <= endIndex; i++) {
    newData.push(data[i]);
  }
  return newData;
};

export const paginationComponent = (paginationData, DEFAULT_PAGE_SIZE, onChangeFn, pageNum = '', className) => {
  let output = '';
  if (get(paginationData, 'totalDocs') > DEFAULT_PAGE_SIZE) {
    output = (
      <StyledPagination
        total={get(paginationData, 'totalDocs')}
        className={className}
        {...(pageNum ? { current: pageNum } : { current: get(paginationData, 'page') })}
        defaultPageSize={get(paginationData, 'limit')}
        onChange={onChangeFn}
        itemRender={textItemRender}
        locale={localeInfo}
      />
    );
  }
  return output;
};

export const showMoreDiv = (htmlText, plainText, lines = 5) => (
  <div className="read-more-less-content">
    <ShowMoreText lines={lines} more="more" less="" anchorClass="links" expanded={false} plainText={plainText}>
      {parse(htmlText)}
    </ShowMoreText>
  </div>
);

export const talentPages = [
  'registration-type',
  'upload-cv',
  'about-you',
  'projects',
  'qualifications',
  'experience',
  'preferences',
  'salary-billing',
  'document-upload',
  'dashboard',
  'my-profile',
  'account-settings',
  'job-briefs',
  'brief-detail',
  'my-projects',
  'project-detail',
  'timesheets',
  'invoices',
  'knowledge-base',
  'community',
  'career-paths',
  'learning-development',
  'perks',
  'wellbeing',
  'profile-view',
];

export const agencyPages = [
  'registration-type',
  'create-profile',
  'add-talents',
  'agency-certificate',
  'payout-details',
  'add-directors-shareholders',
  'documents',
  'dashboard',
  'agency-profile',
  'agency-account-settings',
  'quotes',
  'quote-detail',
  'agency-projects',
  'agency-project-detail',
  'timesheets',
  'invoices',
  'agency-statements',
  'my-team',
  'agency-planning',
  'talent-profile',
  'profile-view',
];

export const clientPages = [
  'about-you',
  'about-company',
  'company-location',
  'dashboard',
  'start-project',
  'request-received',
  'talent-listing',
  'my-profile',
  'talent-profile',
  'account-settings',
  'projects',
  'project-detail',
  'timesheets',
  'talents',
  'billing',
  'contracts',
  'payments',
  'job-briefs',
  'brief-detail',
  'profile-view',
];

export const adminPages = [
  'login',
  'projects',
  'clients',
  'agencies',
  'talents',
  'timesheets',
  'project-detail',
  'interviews',
  'interview-detail',
  'quotes',
  'talent-profile',
  'client-detail',
  'agency-detail',
  'job-briefs',
  'brief-detail',
  'dashboard',
  'profile-view',
  'quote-detail',
  'referrals',
  'talent-partners',
  'talent-partner-detail',
  'ambassadors',
  'ambassador-detail',
];

export const recruiterPages = ['about-you', 'about-company', 'dashboard', 'talents', 'job-briefs', 'brief-detail'];

export const ambassadorPages = ['about-you', 'about-company', 'dashboard', 'talents'];

export const checkIfHasAccessURL = userType => {
  const { pathname } = history.location;
  const filteredPathname = pathname.split('/', 3);
  let userPagesArray = '';
  if (userType === 1) userPagesArray = talentPages;
  else if (userType === 2) userPagesArray = clientPages;
  else if (userType === 3) userPagesArray = agencyPages;
  else if (userType === 4) userPagesArray = adminPages;
  else if (userType === 5) userPagesArray = recruiterPages;
  else if (userType === 6) userPagesArray = ambassadorPages;

  let output = '';
  if (filteredPathname.length === 2) {
    output = true;
  } else if (filteredPathname.length === 3 && !filteredPathname[2]) {
    output = true;
  } else {
    const { 2: thirdValue } = filteredPathname;
    output = userPagesArray.includes(thirdValue);
  }

  return output;
};

export const checkIfWhatAreYouLooking = lookingFor => {
  let output = false;

  if (
    !isEmpty(get(lookingFor, 'design')) ||
    !isEmpty(get(lookingFor, 'softwareDevelopment')) ||
    !isEmpty(get(lookingFor, 'developmentTeam')) ||
    !isEmpty(get(lookingFor, 'dataAiMl'))
  ) {
    output = true;
  }
  return output;
};

export const checkTalentSignupIsCompleted = type => {
  let isCompleted = false;
  const userVersion = StorageService.get('userVersion');
  const apiSignupStep = Number(StorageService.get('apiSignupStep'));
  if (type === 'talent') {
    isCompleted = (apiSignupStep >= 6 && userVersion !== 'v2') || (apiSignupStep === 7 && userVersion === 'v2');
  }
  if (type === 'talent_agency') {
    isCompleted = (apiSignupStep >= 5 && userVersion !== 'v2') || (apiSignupStep === 5 && userVersion === 'v2');
  }
  return isCompleted;
};
