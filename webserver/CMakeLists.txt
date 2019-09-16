cmake_minimum_required(VERSION 3.8)
project(sampleserver VERSION 1.0
        DESCRIPTION "Test Sample Server"
        LANGUAGES CXX)


set(CMAKE_CXX_STANDARD 14)
set(CMAKE_CXX_EXTENSIONS OFF)

set(CMAKE_CXX_FLAGS "-ftemplate-backtrace-limit=0")

set(SOURCES
        SampleServer.cpp
    )

add_executable(sampleserver ${SOURCES})
target_link_libraries(sampleserver PUBLIC boost_system.a pthread crypto ssl)
set(CMAKE_EXPORT_COMPILE_COMMANDS ON)

install(
    TARGETS sampleserver
    PERMISSIONS OWNER_EXECUTE OWNER_WRITE OWNER_READ WORLD_EXECUTE GROUP_EXECUTE SETUID
    DESTINATION bin )
