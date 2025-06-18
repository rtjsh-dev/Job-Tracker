const API_BASE_URL = "https://findwork.dev/api";
const API_KEY = import.meta.env.VITE_FINDWORK_API_KEY;

class JobsApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
    this.headers = {
      Authorization: `Token ${API_KEY}`,
      "Content-Type": "application/json",
    };
  }

  async searchJobs(params = {}) {
    try {
      const queryParams = new URLSearchParams();

      // Add search parameters
      if (params.search) queryParams.append("search", params.search);
      if (params.location) queryParams.append("location", params.location);
      if (params.remote !== undefined)
        queryParams.append("remote", params.remote);
      if (params.employment_type)
        queryParams.append("employment_type", params.employment_type);
      if (params.sort_by) queryParams.append("sort_by", params.sort_by);
      if (params.page) queryParams.append("page", params.page);

      const url = `${this.baseURL}/jobs/?${queryParams.toString()}`;

      const response = await fetch(url, {
        method: "GET",
        headers: this.headers,
      });

      if (!response.ok) {
        throw new Error(
          `API request failed: ${response.status} ${response.statusText}`
        );
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching jobs:", error);
      throw error;
    }
  }

  async getJobById(id) {
    try {
      const response = await fetch(`${this.baseURL}/jobs/${id}/`, {
        method: "GET",
        headers: this.headers,
      });

      if (!response.ok) {
        throw new Error(
          `API request failed: ${response.status} ${response.statusText}`
        );
      }

      return await response.json();
    } catch (error) {
      console.error("Error fetching job details:", error);
      throw error;
    }
  }
}

export const jobsApiService = new JobsApiService();
