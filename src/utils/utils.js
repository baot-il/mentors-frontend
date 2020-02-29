export function convertMentor(mentorData) {
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
        comments
    } = mentorData;

    const mentorForServer = {
        full_name: `${firstName} ${lastName}`,
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