import { Camera, Edit, Mail, Phone, MapPin, Calendar, GraduationCap, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";

const Profile = () => {
  const studentInfo = {
    name: "Alex Johnson",
    studentId: "ST2024001",
    email: "alex.johnson@university.edu",
    phone: "+1 (555) 123-4567",
    address: "123 Campus Drive, University City, UC 12345",
    program: "Bachelor of Science in Computer Science",
    year: "3rd Year",
    gpa: "3.85",
    enrollmentDate: "September 2022"
  };

  const achievements = [
    { title: "Dean's List", semester: "Fall 2023", icon: Award },
    { title: "Outstanding Student", semester: "Spring 2023", icon: GraduationCap },
    { title: "Programming Contest Winner", semester: "Fall 2022", icon: Award }
  ];

  const academicProgress = [
    { subject: "Computer Science", credits: 45, total: 60, percentage: 75 },
    { subject: "Mathematics", credits: 18, total: 20, percentage: 90 },
    { subject: "General Education", credits: 30, total: 30, percentage: 100 },
    { subject: "Electives", credits: 12, total: 15, percentage: 80 }
  ];

  const recentGrades = [
    { course: "Data Structures", grade: "A", credits: 3, semester: "Fall 2023" },
    { course: "Database Systems", grade: "A-", credits: 3, semester: "Fall 2023" },
    { course: "Web Development", grade: "B+", credits: 3, semester: "Fall 2023" },
    { course: "Statistics", grade: "A", credits: 3, semester: "Summer 2023" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">Student Profile</h1>
        <Button className="bg-primary hover:bg-primary/90">
          <Edit className="w-4 h-4 mr-2" />
          Edit Profile
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Information */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader className="text-center">
              <div className="relative mx-auto">
                <Avatar className="w-24 h-24 mx-auto">
                  <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                    {studentInfo.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <Button
                  size="icon"
                  variant="outline"
                  className="absolute -bottom-2 -right-2 rounded-full w-8 h-8"
                >
                  <Camera className="w-4 h-4" />
                </Button>
              </div>
              <div className="space-y-2 mt-4">
                <h2 className="text-xl font-bold">{studentInfo.name}</h2>
                <p className="text-muted-foreground">ID: {studentInfo.studentId}</p>
                <Badge variant="secondary">{studentInfo.year}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{studentInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{studentInfo.phone}</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-muted-foreground mt-0.5" />
                  <span className="text-sm">{studentInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">Enrolled: {studentInfo.enrollmentDate}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Achievements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-accent/50 rounded-lg">
                  <achievement.icon className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">{achievement.title}</p>
                    <p className="text-xs text-muted-foreground">{achievement.semester}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Academic Information */}
        <div className="lg:col-span-2 space-y-6">
          {/* Academic Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Academic Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-accent/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">{studentInfo.gpa}</div>
                  <p className="text-sm text-muted-foreground">Current GPA</p>
                </div>
                <div className="text-center p-4 bg-accent/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">105</div>
                  <p className="text-sm text-muted-foreground">Credits Earned</p>
                </div>
                <div className="text-center p-4 bg-accent/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">84%</div>
                  <p className="text-sm text-muted-foreground">Progress</p>
                </div>
              </div>
              <div>
                <p className="font-medium mb-2">{studentInfo.program}</p>
                <Progress value={84} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* Academic Progress */}
          <Card>
            <CardHeader>
              <CardTitle>Academic Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {academicProgress.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{item.subject}</span>
                    <span className="text-sm text-muted-foreground">
                      {item.credits}/{item.total} credits ({item.percentage}%)
                    </span>
                  </div>
                  <Progress value={item.percentage} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Grades */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Grades</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentGrades.map((grade, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-accent/50 rounded-lg">
                    <div>
                      <p className="font-medium">{grade.course}</p>
                      <p className="text-sm text-muted-foreground">{grade.credits} credits • {grade.semester}</p>
                    </div>
                    <Badge variant={grade.grade.includes('A') ? 'default' : grade.grade.includes('B') ? 'secondary' : 'outline'}>
                      {grade.grade}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;