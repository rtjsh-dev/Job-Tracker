class AnalyticsService {
  constructor() {
    this.events = this.loadEvents();
    this.sessionId = this.generateSessionId();
    this.startTime = Date.now();
  }

  generateSessionId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  loadEvents() {
    try {
      const stored = localStorage.getItem('job-tracker-analytics');
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Failed to load analytics:', error);
      return [];
    }
  }

  saveEvents() {
    try {
      localStorage.setItem('job-tracker-analytics', JSON.stringify(this.events));
    } catch (error) {
      console.error('Failed to save analytics:', error);
    }
  }

  track(eventName, properties = {}) {
    const event = {
      id: this.generateSessionId(),
      name: eventName,
      properties: {
        ...properties,
        sessionId: this.sessionId,
        timestamp: Date.now(),
        url: window.location.href,
        userAgent: navigator.userAgent,
      },
    };

    this.events.push(event);
    this.saveEvents();

    // Keep only last 1000 events to prevent storage bloat
    if (this.events.length > 1000) {
      this.events = this.events.slice(-1000);
      this.saveEvents();
    }

    console.log('Analytics Event:', event);
  }

  // Job-specific tracking methods
  trackJobAdded(jobData) {
    this.track('job_added', {
      company: jobData.companyName,
      title: jobData.jobTitle,
      location: jobData.location,
      status: jobData.status,
    });
  }

  trackJobUpdated(jobData) {
    this.track('job_updated', {
      company: jobData.companyName,
      title: jobData.jobTitle,
      newStatus: jobData.status,
    });
  }

  trackJobDeleted(jobData) {
    this.track('job_deleted', {
      company: jobData.companyName,
      title: jobData.jobTitle,
      status: jobData.status,
    });
  }

  trackJobSearch(searchParams) {
    this.track('job_search', {
      query: searchParams.search,
      location: searchParams.location,
      remote: searchParams.remote,
      employmentType: searchParams.employment_type,
    });
  }

  trackJobImported(jobData) {
    this.track('job_imported', {
      source: 'findwork_api',
      company: jobData.company_name,
      title: jobData.role,
      location: jobData.location,
    });
  }

  trackPageView(pageName) {
    this.track('page_view', {
      page: pageName,
    });
  }

  trackFormSubmission(formName) {
    this.track('form_submission', {
      form: formName,
    });
  }

  // Analytics data retrieval methods
  getEvents(days = 30) {
    const cutoff = Date.now() - (days * 24 * 60 * 60 * 1000);
    return this.events.filter(event => event.properties.timestamp >= cutoff);
  }

  getEventCounts(days = 30) {
    const events = this.getEvents(days);
    const counts = {};
    
    events.forEach(event => {
      counts[event.name] = (counts[event.name] || 0) + 1;
    });
    
    return counts;
  }

  getTopSearches(days = 30) {
    const events = this.getEvents(days);
    const searches = events
      .filter(event => event.name === 'job_search')
      .map(event => event.properties.query)
      .filter(query => query && query.trim());
    
    const searchCounts = {};
    searches.forEach(search => {
      searchCounts[search] = (searchCounts[search] || 0) + 1;
    });
    
    return Object.entries(searchCounts)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 10);
  }

  getSessionDuration() {
    return Date.now() - this.startTime;
  }
}

export const analytics = new AnalyticsService();