export function convertMentorToMentorApi(mentorData) {
    const {
        firstName,
        lastName,
        email,
        phoneNumber,
        workplace,
        jobTitle,
        bio,
        academicBio,
        jobSearch,
        availability,
        matchPreferences,
        isMultipleMentees,
        canSimulate,
        technologies,
        yearsOfExperience,
        comments,
    } = mentorData;

    const mentorForServer = {
        first_name: firstName,
        last_name: lastName,
        email,
        phone: phoneNumber,
        workplace,
        job_title: jobTitle,
        bio,
        academic_bio: academicBio,
        job_search: jobSearch,
        availability,
        match_preferences: matchPreferences,
        multiple_mentees: isMultipleMentees,
        can_simulate: canSimulate,
        technologies,
        years_experience: yearsOfExperience,
        comments,
    };

    return mentorForServer;
}

export function convertMentorApiToMentor(mentorApi) {
    const {
        first_name: firstName,
        last_name: lastName,
        email,
        phone: phoneNumber,
        workplace,
        job_title: jobTitle,
        bio,
        academic_bio: academicBio,
        job_search: jobSearch,
        availability,
        match_preferences: matchPreferences,
        multiple_mentees: isMultipleMentees,
        can_simulate: canSimulate,
        technologies,
        years_experience: yearsOfExperience,
        comments,
    } = mentorApi;

    return {
        firstName,
        lastName,
        email,
        phoneNumber,
        workplace,
        jobTitle,
        bio,
        academicBio,
        jobSearch,
        availability,
        matchPreferences,
        isMultipleMentees,
        canSimulate,
        technologies,
        yearsOfExperience,
        comments,
    };
}
